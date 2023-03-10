"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateOneRequiredWithoutMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutMealsInput_1 = require("../inputs/TenantCreateOrConnectWithoutMealsInput");
const TenantCreateWithoutMealsInput_1 = require("../inputs/TenantCreateWithoutMealsInput");
const TenantUpdateWithoutMealsInput_1 = require("../inputs/TenantUpdateWithoutMealsInput");
const TenantUpsertWithoutMealsInput_1 = require("../inputs/TenantUpsertWithoutMealsInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantUpdateOneRequiredWithoutMealsInput = class TenantUpdateOneRequiredWithoutMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutMealsInput_1.TenantCreateWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutMealsInput_1.TenantCreateWithoutMealsInput)
], TenantUpdateOneRequiredWithoutMealsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutMealsInput_1.TenantCreateOrConnectWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutMealsInput_1.TenantCreateOrConnectWithoutMealsInput)
], TenantUpdateOneRequiredWithoutMealsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpsertWithoutMealsInput_1.TenantUpsertWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpsertWithoutMealsInput_1.TenantUpsertWithoutMealsInput)
], TenantUpdateOneRequiredWithoutMealsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantUpdateOneRequiredWithoutMealsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutMealsInput_1.TenantUpdateWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutMealsInput_1.TenantUpdateWithoutMealsInput)
], TenantUpdateOneRequiredWithoutMealsInput.prototype, "update", void 0);
TenantUpdateOneRequiredWithoutMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateOneRequiredWithoutMealsInput", {
        isAbstract: true
    })
], TenantUpdateOneRequiredWithoutMealsInput);
exports.TenantUpdateOneRequiredWithoutMealsInput = TenantUpdateOneRequiredWithoutMealsInput;
