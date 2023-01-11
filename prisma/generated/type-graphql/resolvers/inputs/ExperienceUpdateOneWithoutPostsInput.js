"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateOneWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutPostsInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutPostsInput");
const ExperienceCreateWithoutPostsInput_1 = require("../inputs/ExperienceCreateWithoutPostsInput");
const ExperienceUpdateWithoutPostsInput_1 = require("../inputs/ExperienceUpdateWithoutPostsInput");
const ExperienceUpsertWithoutPostsInput_1 = require("../inputs/ExperienceUpsertWithoutPostsInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceUpdateOneWithoutPostsInput = class ExperienceUpdateOneWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutPostsInput_1.ExperienceCreateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutPostsInput_1.ExperienceCreateWithoutPostsInput)
], ExperienceUpdateOneWithoutPostsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutPostsInput_1.ExperienceCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutPostsInput_1.ExperienceCreateOrConnectWithoutPostsInput)
], ExperienceUpdateOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpsertWithoutPostsInput_1.ExperienceUpsertWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpsertWithoutPostsInput_1.ExperienceUpsertWithoutPostsInput)
], ExperienceUpdateOneWithoutPostsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ExperienceUpdateOneWithoutPostsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ExperienceUpdateOneWithoutPostsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceUpdateOneWithoutPostsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutPostsInput_1.ExperienceUpdateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutPostsInput_1.ExperienceUpdateWithoutPostsInput)
], ExperienceUpdateOneWithoutPostsInput.prototype, "update", void 0);
ExperienceUpdateOneWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateOneWithoutPostsInput", {
        isAbstract: true
    })
], ExperienceUpdateOneWithoutPostsInput);
exports.ExperienceUpdateOneWithoutPostsInput = ExperienceUpdateOneWithoutPostsInput;
