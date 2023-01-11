"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateOrConnectWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutPriceInput_1 = require("../inputs/ExperienceCreateWithoutPriceInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateOrConnectWithoutPriceInput = class ExperienceCreateOrConnectWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateOrConnectWithoutPriceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutPriceInput_1.ExperienceCreateWithoutPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutPriceInput_1.ExperienceCreateWithoutPriceInput)
], ExperienceCreateOrConnectWithoutPriceInput.prototype, "create", void 0);
ExperienceCreateOrConnectWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateOrConnectWithoutPriceInput", {
        isAbstract: true
    })
], ExperienceCreateOrConnectWithoutPriceInput);
exports.ExperienceCreateOrConnectWithoutPriceInput = ExperienceCreateOrConnectWithoutPriceInput;
