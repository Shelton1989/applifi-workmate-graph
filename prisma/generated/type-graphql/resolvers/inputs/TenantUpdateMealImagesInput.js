"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateMealImagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TenantUpdateMealImagesInput = class TenantUpdateMealImagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantUpdateMealImagesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantUpdateMealImagesInput.prototype, "push", void 0);
TenantUpdateMealImagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateMealImagesInput", {
        isAbstract: true
    })
], TenantUpdateMealImagesInput);
exports.TenantUpdateMealImagesInput = TenantUpdateMealImagesInput;
