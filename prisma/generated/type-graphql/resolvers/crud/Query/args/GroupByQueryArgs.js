"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryOrderByWithAggregationInput_1 = require("../../../inputs/QueryOrderByWithAggregationInput");
const QueryScalarWhereWithAggregatesInput_1 = require("../../../inputs/QueryScalarWhereWithAggregatesInput");
const QueryWhereInput_1 = require("../../../inputs/QueryWhereInput");
const QueryScalarFieldEnum_1 = require("../../../../enums/QueryScalarFieldEnum");
let GroupByQueryArgs = class GroupByQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereInput_1.QueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryWhereInput_1.QueryWhereInput)
], GroupByQueryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryOrderByWithAggregationInput_1.QueryOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByQueryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryScalarFieldEnum_1.QueryScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByQueryArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryScalarWhereWithAggregatesInput_1.QueryScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryScalarWhereWithAggregatesInput_1.QueryScalarWhereWithAggregatesInput)
], GroupByQueryArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByQueryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByQueryArgs.prototype, "skip", void 0);
GroupByQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByQueryArgs);
exports.GroupByQueryArgs = GroupByQueryArgs;
