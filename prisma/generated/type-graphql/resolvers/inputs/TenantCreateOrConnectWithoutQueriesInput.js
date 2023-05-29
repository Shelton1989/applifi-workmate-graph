"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateOrConnectWithoutQueriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutQueriesInput_1 = require("../inputs/TenantCreateWithoutQueriesInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateOrConnectWithoutQueriesInput = class TenantCreateOrConnectWithoutQueriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateOrConnectWithoutQueriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutQueriesInput_1.TenantCreateWithoutQueriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutQueriesInput_1.TenantCreateWithoutQueriesInput)
], TenantCreateOrConnectWithoutQueriesInput.prototype, "create", void 0);
TenantCreateOrConnectWithoutQueriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateOrConnectWithoutQueriesInput", {
        isAbstract: true
    })
], TenantCreateOrConnectWithoutQueriesInput);
exports.TenantCreateOrConnectWithoutQueriesInput = TenantCreateOrConnectWithoutQueriesInput;
