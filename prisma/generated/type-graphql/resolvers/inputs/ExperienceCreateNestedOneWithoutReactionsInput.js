"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateNestedOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutReactionsInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutReactionsInput");
const ExperienceCreateWithoutReactionsInput_1 = require("../inputs/ExperienceCreateWithoutReactionsInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateNestedOneWithoutReactionsInput = class ExperienceCreateNestedOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutReactionsInput_1.ExperienceCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutReactionsInput_1.ExperienceCreateWithoutReactionsInput)
], ExperienceCreateNestedOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutReactionsInput_1.ExperienceCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutReactionsInput_1.ExperienceCreateOrConnectWithoutReactionsInput)
], ExperienceCreateNestedOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateNestedOneWithoutReactionsInput.prototype, "connect", void 0);
ExperienceCreateNestedOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateNestedOneWithoutReactionsInput", {
        isAbstract: true
    })
], ExperienceCreateNestedOneWithoutReactionsInput);
exports.ExperienceCreateNestedOneWithoutReactionsInput = ExperienceCreateNestedOneWithoutReactionsInput;
