"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateOrConnectWithoutMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutMealsInput_1 = require("../inputs/TenantCreateWithoutMealsInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateOrConnectWithoutMealsInput = class TenantCreateOrConnectWithoutMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateOrConnectWithoutMealsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutMealsInput_1.TenantCreateWithoutMealsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutMealsInput_1.TenantCreateWithoutMealsInput)
], TenantCreateOrConnectWithoutMealsInput.prototype, "create", void 0);
TenantCreateOrConnectWithoutMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateOrConnectWithoutMealsInput", {
        isAbstract: true
    })
], TenantCreateOrConnectWithoutMealsInput);
exports.TenantCreateOrConnectWithoutMealsInput = TenantCreateOrConnectWithoutMealsInput;
