"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestOrderByWithRelationInput_1 = require("../../../inputs/RequestOrderByWithRelationInput");
const RequestWhereInput_1 = require("../../../inputs/RequestWhereInput");
const RequestWhereUniqueInput_1 = require("../../../inputs/RequestWhereUniqueInput");
const RequestScalarFieldEnum_1 = require("../../../../enums/RequestScalarFieldEnum");
let FindManyRequestArgs = class FindManyRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereInput_1.RequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestWhereInput_1.RequestWhereInput)
], FindManyRequestArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestOrderByWithRelationInput_1.RequestOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyRequestArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereUniqueInput_1.RequestWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestWhereUniqueInput_1.RequestWhereUniqueInput)
], FindManyRequestArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyRequestArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyRequestArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestScalarFieldEnum_1.RequestScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyRequestArgs.prototype, "distinct", void 0);
FindManyRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyRequestArgs);
exports.FindManyRequestArgs = FindManyRequestArgs;
