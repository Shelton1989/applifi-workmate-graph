"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateNestedOneWithoutQueriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutQueriesInput_1 = require("../inputs/TenantCreateOrConnectWithoutQueriesInput");
const TenantCreateWithoutQueriesInput_1 = require("../inputs/TenantCreateWithoutQueriesInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateNestedOneWithoutQueriesInput = class TenantCreateNestedOneWithoutQueriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutQueriesInput_1.TenantCreateWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutQueriesInput_1.TenantCreateWithoutQueriesInput)
], TenantCreateNestedOneWithoutQueriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutQueriesInput_1.TenantCreateOrConnectWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutQueriesInput_1.TenantCreateOrConnectWithoutQueriesInput)
], TenantCreateNestedOneWithoutQueriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateNestedOneWithoutQueriesInput.prototype, "connect", void 0);
TenantCreateNestedOneWithoutQueriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateNestedOneWithoutQueriesInput", {
        isAbstract: true
    })
], TenantCreateNestedOneWithoutQueriesInput);
exports.TenantCreateNestedOneWithoutQueriesInput = TenantCreateNestedOneWithoutQueriesInput;
