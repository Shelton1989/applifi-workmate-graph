"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateNestedOneWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutPriceInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutPriceInput");
const ExperienceCreateWithoutPriceInput_1 = require("../inputs/ExperienceCreateWithoutPriceInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateNestedOneWithoutPriceInput = class ExperienceCreateNestedOneWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutPriceInput_1.ExperienceCreateWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutPriceInput_1.ExperienceCreateWithoutPriceInput)
], ExperienceCreateNestedOneWithoutPriceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutPriceInput_1.ExperienceCreateOrConnectWithoutPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutPriceInput_1.ExperienceCreateOrConnectWithoutPriceInput)
], ExperienceCreateNestedOneWithoutPriceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateNestedOneWithoutPriceInput.prototype, "connect", void 0);
ExperienceCreateNestedOneWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateNestedOneWithoutPriceInput", {
        isAbstract: true
    })
], ExperienceCreateNestedOneWithoutPriceInput);
exports.ExperienceCreateNestedOneWithoutPriceInput = ExperienceCreateNestedOneWithoutPriceInput;
