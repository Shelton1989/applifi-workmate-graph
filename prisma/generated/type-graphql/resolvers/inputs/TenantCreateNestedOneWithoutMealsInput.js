"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateNestedOneWithoutMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutMealsInput_1 = require("../inputs/TenantCreateOrConnectWithoutMealsInput");
const TenantCreateWithoutMealsInput_1 = require("../inputs/TenantCreateWithoutMealsInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateNestedOneWithoutMealsInput = class TenantCreateNestedOneWithoutMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutMealsInput_1.TenantCreateWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutMealsInput_1.TenantCreateWithoutMealsInput)
], TenantCreateNestedOneWithoutMealsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutMealsInput_1.TenantCreateOrConnectWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutMealsInput_1.TenantCreateOrConnectWithoutMealsInput)
], TenantCreateNestedOneWithoutMealsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateNestedOneWithoutMealsInput.prototype, "connect", void 0);
TenantCreateNestedOneWithoutMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateNestedOneWithoutMealsInput", {
        isAbstract: true
    })
], TenantCreateNestedOneWithoutMealsInput);
exports.TenantCreateNestedOneWithoutMealsInput = TenantCreateNestedOneWithoutMealsInput;
