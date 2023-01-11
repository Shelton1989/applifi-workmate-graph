"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreategalleryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExperienceCreategalleryInput = class ExperienceCreategalleryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceCreategalleryInput.prototype, "set", void 0);
ExperienceCreategalleryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreategalleryInput", {
        isAbstract: true
    })
], ExperienceCreategalleryInput);
exports.ExperienceCreategalleryInput = ExperienceCreategalleryInput;
