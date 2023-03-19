"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateexperienceImagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TenantUpdateexperienceImagesInput = class TenantUpdateexperienceImagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantUpdateexperienceImagesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantUpdateexperienceImagesInput.prototype, "push", void 0);
TenantUpdateexperienceImagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateexperienceImagesInput", {
        isAbstract: true
    })
], TenantUpdateexperienceImagesInput);
exports.TenantUpdateexperienceImagesInput = TenantUpdateexperienceImagesInput;
