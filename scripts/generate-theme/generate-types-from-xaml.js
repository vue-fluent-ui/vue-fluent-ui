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
const theme_light = parsedXML.ResourceDictionary["ResourceDictionary.ThemeDictionaries"].ResourceDictionary[0].SolidColorBrush;
let light_theme = "";
for (const val of theme_light) {
    const key = val["@_x:Key"];
    //const color = val["@_Color"];
    light_theme += `    ${key}:string\n`;

}
const light_theme_str = `interface theme {\n${light_theme}\n}`;
fs.writeFileSync("./output/theme.demo.type.ts", light_theme_str, {
    encoding: "utf8",
});


console.log("转换完成");