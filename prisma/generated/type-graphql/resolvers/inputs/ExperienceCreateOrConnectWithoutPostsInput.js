"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateOrConnectWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutPostsInput_1 = require("../inputs/ExperienceCreateWithoutPostsInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateOrConnectWithoutPostsInput = class ExperienceCreateOrConnectWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateOrConnectWithoutPostsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutPostsInput_1.ExperienceCreateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutPostsInput_1.ExperienceCreateWithoutPostsInput)
], ExperienceCreateOrConnectWithoutPostsInput.prototype, "create", void 0);
ExperienceCreateOrConnectWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateOrConnectWithoutPostsInput", {
        isAbstract: true
    })
], ExperienceCreateOrConnectWithoutPostsInput);
exports.ExperienceCreateOrConnectWithoutPostsInput = ExperienceCreateOrConnectWithoutPostsInput;
