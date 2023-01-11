"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdategalleryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExperienceUpdategalleryInput = class ExperienceUpdategalleryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdategalleryInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdategalleryInput.prototype, "push", void 0);
ExperienceUpdategalleryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdategalleryInput", {
        isAbstract: true
    })
], ExperienceUpdategalleryInput);
exports.ExperienceUpdategalleryInput = ExperienceUpdategalleryInput;
