"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryWhereInput_1 = require("../inputs/QueryWhereInput");
let QueryListRelationFilter = class QueryListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereInput_1.QueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryWhereInput_1.QueryWhereInput)
], QueryListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereInput_1.QueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryWhereInput_1.QueryWhereInput)
], QueryListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereInput_1.QueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryWhereInput_1.QueryWhereInput)
], QueryListRelationFilter.prototype, "none", void 0);
QueryListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryListRelationFilter", {
        isAbstract: true
    })
], QueryListRelationFilter);
exports.QueryListRelationFilter = QueryListRelationFilter;
