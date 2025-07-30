/**
 * @fileOverview 生成一个新的组件的脚本
 */

const fs = require('node:fs');
const path = require('node:path');

/**
 * 主函数，用于创建一个新的 Vue 组件。
 *
 * 1. 询问用户要创建的组件名 (PascalCase)。
 * 2. 检查组件是否已存在。
 * 3. 创建组件目录和文件。
 * 4. 生成组件文件（包括 .vue 文件，.ts 文件，index.ts）。
 * 5. 更新 components/index.ts，添加对新组件的导出。
 *
 * @async
 */
const main = async () => {
  const { default: inquirer } = await import('inquirer');
  const { default: chalk } = await import('chalk');
  const { default: ora } = await import('ora');

  const { componentNamePascal } = await inquirer.prompt([
    {
      type: 'input',
      name: 'componentNamePascal',
      message: '请输入要创建的组件名 (PascalCase, e.g., HelloWorld):',
      validate: (input) => {
        if (!input) {
          return '错误: 组件名称不能为空。';
        }
        if (!/^[A-Z][a-zA-Z0-9]*$/.test(input)) {
          return '错误: 组件名称必须是 PascalCase (e.g., HelloWorld)。';
        }
        return true;
      },
    },
  ]);

  const componentDir = path.resolve(__dirname, `../../packages/vue-fluent-ui/src/components/Vf${componentNamePascal}`);
  const srcDir = path.resolve(componentDir, 'src');

  // 检查组件是否已存在
  if (fs.existsSync(componentDir)) {
    console.error(chalk.red(`错误: 组件 Vf${componentNamePascal} 已经存在。`));
    process.exit(1);
  }

  const spinner = ora(chalk.cyan(`正在创建组件 Vf${componentNamePascal}...`)).start();

  try {
    // 1. 创建目录
    spinner.text = `创建目录: ${chalk.yellow(componentDir)}`;
    fs.mkdirSync(componentDir, { recursive: true });
    fs.mkdirSync(srcDir, { recursive: true });
    spinner.succeed(chalk.green(`目录 ${componentDir} 创建成功。`));

    // 2. 创建文件
    spinner.start("正在生成组件文件...");
    const templatesDir = path.resolve(__dirname, 'templates');
    const vueTplPath = path.resolve(templatesDir, 'vue.tpl');
    const indexTplPath = path.resolve(templatesDir, 'index.ts.tpl');

    const vueTpl = fs.readFileSync(vueTplPath, 'utf-8');
    const indexTpl = fs.readFileSync(indexTplPath, 'utf-8');

    const toKebabCase = (str) => str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    const componentNameKebab = toKebabCase(componentNamePascal);
    const replacePlaceholders = (template) =>
      template
        .replace(/__COMPONENT_NAME_PASCAL__/g, componentNamePascal)
        .replace(/__COMPONENT_NAME_KEBAB__/g, componentNameKebab);

    const vueContent = replacePlaceholders(vueTpl);
    const indexContent = replacePlaceholders(indexTpl);

    fs.writeFileSync(path.resolve(srcDir, `${componentNamePascal}.vue`), vueContent);
    fs.writeFileSync(path.resolve(srcDir, `${componentNamePascal}.ts`), ''); // 创建空的 .ts 文件
    fs.writeFileSync(path.resolve(componentDir, 'index.ts'), indexContent);
    spinner.succeed(chalk.green(`组件 Vf${componentNamePascal} 文件创建成功。`));

    // 3. 更新 components/index.ts
    spinner.start('正在导出组件...');
    const componentsIndexPath = path.resolve(__dirname, '../../packages/vue-fluent-ui/src/components/index.ts');
    const exportStatement = `export * from './Vf${componentNamePascal}'`; // 无分号

    const indexFileContent = fs.readFileSync(componentsIndexPath, 'utf-8');
    const contentToAppend = (indexFileContent.trim().length === 0 || indexFileContent.endsWith('\n'))
      ? exportStatement
      : `\n${exportStatement}`;

    fs.appendFileSync(componentsIndexPath, contentToAppend);
    spinner.succeed(chalk.green(`组件 Vf${componentNamePascal} 已成功导出。`));

    console.log(chalk.bold.green('\n✨ 组件创建完成！'));

  } catch (error) {
    spinner.fail(chalk.red('组件创建失败。'));
    console.error(error);
    process.exit(1);
  }
};

main().catch((error) => {
  console.error('发生未知错误:', error);
  process.exit(1);
});
