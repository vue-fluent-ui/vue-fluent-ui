/**
 * @fileOverview 生成一个新的组件的脚本
 */

const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('请输入要创建的组件名 (PascalCase, e.g., HelloWorld): ', (componentNamePascal) => {
  if (!componentNamePascal) {
    console.error('错误: 组件名称不能为空。');
    rl.close();
    process.exit(1);
  }

  const componentDir = path.resolve(__dirname, `../../packages/vue-fluent-ui/src/components/Vf${componentNamePascal}`);
  const srcDir = path.resolve(componentDir, 'src');

  // 检查组件是否已存在
  if (fs.existsSync(componentDir)) {
    console.error(`错误: 组件 Vf${componentNamePascal} 已经存在。`);
    rl.close();
    process.exit(1);
  }

  // 创建目录
  fs.mkdirSync(componentDir, { recursive: true });
  fs.mkdirSync(srcDir, { recursive: true });

  console.log(`目录 ${componentDir} 创建成功。`);

  // 模板文件路径
  const templatesDir = path.resolve(__dirname, 'templates');
  const vueTplPath = path.resolve(templatesDir, 'vue.tpl');
  const indexTplPath = path.resolve(templatesDir, 'index.ts.tpl');

  // 读取模板内容
  const vueTpl = fs.readFileSync(vueTplPath, 'utf-8');
  const indexTpl = fs.readFileSync(indexTplPath, 'utf-8');

  // 替换占位符
  const toKebabCase = (str) => str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  const componentNameKebab = toKebabCase(componentNamePascal);
  const replacePlaceholders = (template) =>
    template
      .replace(/__COMPONENT_NAME_PASCAL__/g, componentNamePascal)
      .replace(/__COMPONENT_NAME_KEBAB__/g, componentNameKebab);

  // 生成文件内容
  const vueContent = replacePlaceholders(vueTpl);
  const indexContent = replacePlaceholders(indexTpl);

  // 写入文件
  fs.writeFileSync(path.resolve(srcDir, `${componentNamePascal}.vue`), vueContent);
  fs.writeFileSync(path.resolve(srcDir, `${componentNamePascal}.ts`), ''); // 创建空的 .ts 文件
  fs.writeFileSync(path.resolve(componentDir, 'index.ts'), indexContent);

  console.log(`组件 Vf${componentNamePascal} 文件创建成功。`);

  // 更新 components/index.ts
  const componentsIndexPath = path.resolve(__dirname, '../../packages/vue-fluent-ui/src/components/index.ts');
  const exportStatement = `export * from './Vf${componentNamePascal}'`; // 无分号

  const indexFileContent = fs.readFileSync(componentsIndexPath, 'utf-8');
  const contentToAppend = (indexFileContent.trim().length === 0 || indexFileContent.endsWith('\n'))
    ? exportStatement
    : `\n${exportStatement}`;

  fs.appendFileSync(componentsIndexPath, contentToAppend);

  console.log(`组件 Vf${componentNamePascal} 已成功导出。`);
  console.log('✨ 组件创建完成！');

  rl.close();
});
