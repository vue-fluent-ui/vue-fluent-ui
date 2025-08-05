/**
 * 根据microsoft的theme resources来生成相应的typescript文件
 * 防止手动转换太过于坐牢
 */
import fs from "node:fs";
import {XMLParser} from "fast-xml-parser";

const themeResources = fs.readFileSync("./Common_themeresources_any.xaml", "utf-8");

// 配置 XML 解析器以正确处理 XAML
// noinspection JSCheckFunctionSignatures
const xmlParser = new XMLParser({
    ignoreAttributes: false, // 不忽略属性
    attributeNamePrefix: "@_", // 属性前缀
    parseAttributeValue: true, // 解析属性值
    trimValues: true, // 修剪值
    parseTrueNumberOnly: false,
    ignoreDeclaration: true, // 忽略 XML 声明
    ignorePiTags: true, // 忽略处理指令
    preserveOrder: false, // 不保持顺序以提高性能
    stopNodes: ["*.pre", "*.script"], // 停止解析的节点
    processEntities: true, // 处理实体
    htmlEntities: false, // 不处理 HTML 实体
    arrayMode: false, // 自动将重复元素转为数组
});

const parsedXML = xmlParser.parse(themeResources);
const json_str = JSON.stringify(parsedXML, null, 4);

fs.writeFileSync("./output/themeresources.json", json_str, {
    encoding: "utf8",
});

// color light的处理

// noinspection JSUnresolvedReference
const theme_light = parsedXML.ResourceDictionary["ResourceDictionary.ThemeDictionaries"].ResourceDictionary[0].Color;
let light_theme = "";
for (const val of theme_light) {
    const text = val["#text"];
    const key = val["@_x:Key"];

    if (text.length === 9) {
        // 带有透明度，需要特殊处理
        // 需要将第二位和第三位删除，移动到最后两位
        // 提取 alpha 值 (后面的前两个字符#)
        const alpha = text.substring(1, 3);
        // 提取颜色值 (剩余的 6 个字符)
        const color = text.substring(3);
        //重新格式化为 #RRGGBBAA 格式
        const reformattedColor = `#${color}${alpha}`;
        light_theme += `    // ${key}(重新格式化)\n    ${key}: "${reformattedColor}"\n`;

    } else {
        light_theme += `    // ${key}\n    ${key}: "${text}"\n`;
    }
    // todo 看起来不是很能考虑color的样子，还是得考虑转换brush成类型定义，具体解释看看ob笔记
}
const light_theme_str = `interface theme {\n${light_theme}\n}`;
fs.writeFileSync("./output/light.theme.demo.ts", light_theme_str, {
    encoding: "utf8",
});


console.log("转换完成");