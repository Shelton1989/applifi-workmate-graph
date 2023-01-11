"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExperienceWhereUniqueInput = class ExperienceWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceWhereUniqueInput.prototype, "id", void 0);
ExperienceWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceWhereUniqueInput", {
        isAbstract: true
    })
], ExperienceWhereUniqueInput);
exports.ExperienceWhereUniqueInput = ExperienceWhereUniqueInput;
