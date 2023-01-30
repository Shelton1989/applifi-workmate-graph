"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateNestedOneWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateOrConnectWithoutExperienceInput_1 = require("../inputs/PriceCreateOrConnectWithoutExperienceInput");
const PriceCreateWithoutExperienceInput_1 = require("../inputs/PriceCreateWithoutExperienceInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateNestedOneWithoutExperienceInput = class PriceCreateNestedOneWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutExperienceInput_1.PriceCreateWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutExperienceInput_1.PriceCreateWithoutExperienceInput)
], PriceCreateNestedOneWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateOrConnectWithoutExperienceInput_1.PriceCreateOrConnectWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateOrConnectWithoutExperienceInput_1.PriceCreateOrConnectWithoutExperienceInput)
], PriceCreateNestedOneWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateNestedOneWithoutExperienceInput.prototype, "connect", void 0);
PriceCreateNestedOneWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateNestedOneWithoutExperienceInput", {
        isAbstract: true
    })
], PriceCreateNestedOneWithoutExperienceInput);
exports.PriceCreateNestedOneWithoutExperienceInput = PriceCreateNestedOneWithoutExperienceInput;
