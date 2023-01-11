"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpsertWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutPostsInput_1 = require("../inputs/ExperienceCreateWithoutPostsInput");
const ExperienceUpdateWithoutPostsInput_1 = require("../inputs/ExperienceUpdateWithoutPostsInput");
let ExperienceUpsertWithoutPostsInput = class ExperienceUpsertWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutPostsInput_1.ExperienceUpdateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutPostsInput_1.ExperienceUpdateWithoutPostsInput)
], ExperienceUpsertWithoutPostsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutPostsInput_1.ExperienceCreateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutPostsInput_1.ExperienceCreateWithoutPostsInput)
], ExperienceUpsertWithoutPostsInput.prototype, "create", void 0);
ExperienceUpsertWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpsertWithoutPostsInput", {
        isAbstract: true
    })
], ExperienceUpsertWithoutPostsInput);
exports.ExperienceUpsertWithoutPostsInput = ExperienceUpsertWithoutPostsInput;
