"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateNestedOneWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutOrdersInput_1 = require("../inputs/TenantCreateOrConnectWithoutOrdersInput");
const TenantCreateWithoutOrdersInput_1 = require("../inputs/TenantCreateWithoutOrdersInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateNestedOneWithoutOrdersInput = class TenantCreateNestedOneWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutOrdersInput_1.TenantCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutOrdersInput_1.TenantCreateWithoutOrdersInput)
], TenantCreateNestedOneWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutOrdersInput_1.TenantCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutOrdersInput_1.TenantCreateOrConnectWithoutOrdersInput)
], TenantCreateNestedOneWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateNestedOneWithoutOrdersInput.prototype, "connect", void 0);
TenantCreateNestedOneWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateNestedOneWithoutOrdersInput", {
        isAbstract: true
    })
], TenantCreateNestedOneWithoutOrdersInput);
exports.TenantCreateNestedOneWithoutOrdersInput = TenantCreateNestedOneWithoutOrdersInput;
