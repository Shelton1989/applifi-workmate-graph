"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateMealImagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TenantCreateMealImagesInput = class TenantCreateMealImagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TenantCreateMealImagesInput.prototype, "set", void 0);
TenantCreateMealImagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateMealImagesInput", {
        isAbstract: true
    })
], TenantCreateMealImagesInput);
exports.TenantCreateMealImagesInput = TenantCreateMealImagesInput;
