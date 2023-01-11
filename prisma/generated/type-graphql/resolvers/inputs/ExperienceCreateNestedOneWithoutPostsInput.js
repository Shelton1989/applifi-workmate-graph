"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateNestedOneWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutPostsInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutPostsInput");
const ExperienceCreateWithoutPostsInput_1 = require("../inputs/ExperienceCreateWithoutPostsInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateNestedOneWithoutPostsInput = class ExperienceCreateNestedOneWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutPostsInput_1.ExperienceCreateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutPostsInput_1.ExperienceCreateWithoutPostsInput)
], ExperienceCreateNestedOneWithoutPostsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutPostsInput_1.ExperienceCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutPostsInput_1.ExperienceCreateOrConnectWithoutPostsInput)
], ExperienceCreateNestedOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateNestedOneWithoutPostsInput.prototype, "connect", void 0);
ExperienceCreateNestedOneWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateNestedOneWithoutPostsInput", {
        isAbstract: true
    })
], ExperienceCreateNestedOneWithoutPostsInput);
exports.ExperienceCreateNestedOneWithoutPostsInput = ExperienceCreateNestedOneWithoutPostsInput;
