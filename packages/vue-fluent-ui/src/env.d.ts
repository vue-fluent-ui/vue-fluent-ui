/// <reference types="@rslib/core/types" />


// 需要vue类型声明
declare module '*.vue' {
    import Vue from 'vue';

    // noinspection JSUnusedGlobalSymbols
    export default Vue;
}