"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateManyWithWhereWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceScalarWhereInput_1 = require("../inputs/PriceScalarWhereInput");
const PriceUpdateManyMutationInput_1 = require("../inputs/PriceUpdateManyMutationInput");
let PriceUpdateManyWithWhereWithoutExperienceInput = class PriceUpdateManyWithWhereWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceScalarWhereInput_1.PriceScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceScalarWhereInput_1.PriceScalarWhereInput)
], PriceUpdateManyWithWhereWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateManyMutationInput_1.PriceUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceUpdateManyMutationInput_1.PriceUpdateManyMutationInput)
], PriceUpdateManyWithWhereWithoutExperienceInput.prototype, "data", void 0);
PriceUpdateManyWithWhereWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateManyWithWhereWithoutExperienceInput", {
        isAbstract: true
    })
], PriceUpdateManyWithWhereWithoutExperienceInput);
exports.PriceUpdateManyWithWhereWithoutExperienceInput = PriceUpdateManyWithWhereWithoutExperienceInput;
