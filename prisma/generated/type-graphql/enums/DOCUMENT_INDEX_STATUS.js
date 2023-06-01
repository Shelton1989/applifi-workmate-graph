"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOCUMENT_INDEX_STATUS = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DOCUMENT_INDEX_STATUS;
(function (DOCUMENT_INDEX_STATUS) {
    DOCUMENT_INDEX_STATUS["INDEXED"] = "INDEXED";
    DOCUMENT_INDEX_STATUS["NOT_INDEXED"] = "NOT_INDEXED";
    DOCUMENT_INDEX_STATUS["INDEXING"] = "INDEXING";
    DOCUMENT_INDEX_STATUS["INDEXING_FAILED"] = "INDEXING_FAILED";
})(DOCUMENT_INDEX_STATUS = exports.DOCUMENT_INDEX_STATUS || (exports.DOCUMENT_INDEX_STATUS = {}));
TypeGraphQL.registerEnumType(DOCUMENT_INDEX_STATUS, {
    name: "DOCUMENT_INDEX_STATUS",
    description: undefined,
});
