"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreatelikedByIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExperienceCreatelikedByIdsInput = class ExperienceCreatelikedByIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceCreatelikedByIdsInput.prototype, "set", void 0);
ExperienceCreatelikedByIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreatelikedByIdsInput", {
        isAbstract: true
    })
], ExperienceCreatelikedByIdsInput);
exports.ExperienceCreatelikedByIdsInput = ExperienceCreatelikedByIdsInput;
