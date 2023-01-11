"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateexperienceImagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TenantCreateexperienceImagesInput = class TenantCreateexperienceImagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TenantCreateexperienceImagesInput.prototype, "set", void 0);
TenantCreateexperienceImagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateexperienceImagesInput", {
        isAbstract: true
    })
], TenantCreateexperienceImagesInput);
exports.TenantCreateexperienceImagesInput = TenantCreateexperienceImagesInput;
