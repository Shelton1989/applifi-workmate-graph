"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestOrderByWithRelationInput_1 = require("../../../inputs/RequestOrderByWithRelationInput");
const RequestWhereInput_1 = require("../../../inputs/RequestWhereInput");
const RequestWhereUniqueInput_1 = require("../../../inputs/RequestWhereUniqueInput");
const RequestScalarFieldEnum_1 = require("../../../../enums/RequestScalarFieldEnum");
let FindFirstRequestArgs = class FindFirstRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereInput_1.RequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestWhereInput_1.RequestWhereInput)
], FindFirstRequestArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestOrderByWithRelationInput_1.RequestOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRequestArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereUniqueInput_1.RequestWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestWhereUniqueInput_1.RequestWhereUniqueInput)
], FindFirstRequestArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRequestArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRequestArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestScalarFieldEnum_1.RequestScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRequestArgs.prototype, "distinct", void 0);
FindFirstRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstRequestArgs);
exports.FindFirstRequestArgs = FindFirstRequestArgs;
