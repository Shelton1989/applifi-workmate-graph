"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateOrConnectWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutOrdersInput_1 = require("../inputs/TenantCreateWithoutOrdersInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateOrConnectWithoutOrdersInput = class TenantCreateOrConnectWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateOrConnectWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutOrdersInput_1.TenantCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutOrdersInput_1.TenantCreateWithoutOrdersInput)
], TenantCreateOrConnectWithoutOrdersInput.prototype, "create", void 0);
TenantCreateOrConnectWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateOrConnectWithoutOrdersInput", {
        isAbstract: true
    })
], TenantCreateOrConnectWithoutOrdersInput);
exports.TenantCreateOrConnectWithoutOrdersInput = TenantCreateOrConnectWithoutOrdersInput;
