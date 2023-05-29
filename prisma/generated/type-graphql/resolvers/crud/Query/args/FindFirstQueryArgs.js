"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryOrderByWithRelationInput_1 = require("../../../inputs/QueryOrderByWithRelationInput");
const QueryWhereInput_1 = require("../../../inputs/QueryWhereInput");
const QueryWhereUniqueInput_1 = require("../../../inputs/QueryWhereUniqueInput");
const QueryScalarFieldEnum_1 = require("../../../../enums/QueryScalarFieldEnum");
let FindFirstQueryArgs = class FindFirstQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereInput_1.QueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryWhereInput_1.QueryWhereInput)
], FindFirstQueryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryOrderByWithRelationInput_1.QueryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstQueryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereUniqueInput_1.QueryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryWhereUniqueInput_1.QueryWhereUniqueInput)
], FindFirstQueryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstQueryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstQueryArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryScalarFieldEnum_1.QueryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstQueryArgs.prototype, "distinct", void 0);
FindFirstQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstQueryArgs);
exports.FindFirstQueryArgs = FindFirstQueryArgs;
