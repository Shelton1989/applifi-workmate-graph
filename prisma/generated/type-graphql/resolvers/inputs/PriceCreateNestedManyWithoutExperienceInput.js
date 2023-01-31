"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateNestedManyWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateManyExperienceInputEnvelope_1 = require("../inputs/PriceCreateManyExperienceInputEnvelope");
const PriceCreateOrConnectWithoutExperienceInput_1 = require("../inputs/PriceCreateOrConnectWithoutExperienceInput");
const PriceCreateWithoutExperienceInput_1 = require("../inputs/PriceCreateWithoutExperienceInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateNestedManyWithoutExperienceInput = class PriceCreateNestedManyWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceCreateWithoutExperienceInput_1.PriceCreateWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceCreateNestedManyWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceCreateOrConnectWithoutExperienceInput_1.PriceCreateOrConnectWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceCreateNestedManyWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateManyExperienceInputEnvelope_1.PriceCreateManyExperienceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateManyExperienceInputEnvelope_1.PriceCreateManyExperienceInputEnvelope)
], PriceCreateNestedManyWithoutExperienceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereUniqueInput_1.PriceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceCreateNestedManyWithoutExperienceInput.prototype, "connect", void 0);
PriceCreateNestedManyWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateNestedManyWithoutExperienceInput", {
        isAbstract: true
    })
], PriceCreateNestedManyWithoutExperienceInput);
exports.PriceCreateNestedManyWithoutExperienceInput = PriceCreateNestedManyWithoutExperienceInput;
