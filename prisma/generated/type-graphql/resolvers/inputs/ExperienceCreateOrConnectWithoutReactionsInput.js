"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateOrConnectWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutReactionsInput_1 = require("../inputs/ExperienceCreateWithoutReactionsInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateOrConnectWithoutReactionsInput = class ExperienceCreateOrConnectWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateOrConnectWithoutReactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutReactionsInput_1.ExperienceCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutReactionsInput_1.ExperienceCreateWithoutReactionsInput)
], ExperienceCreateOrConnectWithoutReactionsInput.prototype, "create", void 0);
ExperienceCreateOrConnectWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateOrConnectWithoutReactionsInput", {
        isAbstract: true
    })
], ExperienceCreateOrConnectWithoutReactionsInput);
exports.ExperienceCreateOrConnectWithoutReactionsInput = ExperienceCreateOrConnectWithoutReactionsInput;
