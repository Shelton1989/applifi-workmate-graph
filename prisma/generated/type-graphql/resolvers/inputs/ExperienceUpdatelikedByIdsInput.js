"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdatelikedByIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExperienceUpdatelikedByIdsInput = class ExperienceUpdatelikedByIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdatelikedByIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdatelikedByIdsInput.prototype, "push", void 0);
ExperienceUpdatelikedByIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdatelikedByIdsInput", {
        isAbstract: true
    })
], ExperienceUpdatelikedByIdsInput);
exports.ExperienceUpdatelikedByIdsInput = ExperienceUpdatelikedByIdsInput;
