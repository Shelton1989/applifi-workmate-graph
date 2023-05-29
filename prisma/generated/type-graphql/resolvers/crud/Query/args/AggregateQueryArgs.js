"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryOrderByWithRelationInput_1 = require("../../../inputs/QueryOrderByWithRelationInput");
const QueryWhereInput_1 = require("../../../inputs/QueryWhereInput");
const QueryWhereUniqueInput_1 = require("../../../inputs/QueryWhereUniqueInput");
let AggregateQueryArgs = class AggregateQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereInput_1.QueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryWhereInput_1.QueryWhereInput)
], AggregateQueryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryOrderByWithRelationInput_1.QueryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateQueryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereUniqueInput_1.QueryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryWhereUniqueInput_1.QueryWhereUniqueInput)
], AggregateQueryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateQueryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateQueryArgs.prototype, "skip", void 0);
AggregateQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateQueryArgs);
exports.AggregateQueryArgs = AggregateQueryArgs;
