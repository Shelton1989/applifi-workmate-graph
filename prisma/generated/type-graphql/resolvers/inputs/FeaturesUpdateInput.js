"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ExperienceUpdateOneRequiredWithoutFeaturesInput_1 = require("../inputs/ExperienceUpdateOneRequiredWithoutFeaturesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let FeaturesUpdateInput = class FeaturesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateOneRequiredWithoutFeaturesInput_1.ExperienceUpdateOneRequiredWithoutFeaturesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateOneRequiredWithoutFeaturesInput_1.ExperienceUpdateOneRequiredWithoutFeaturesInput)
], FeaturesUpdateInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FeaturesUpdateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FeaturesUpdateInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FeaturesUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FeaturesUpdateInput.prototype, "updatedAt", void 0);
FeaturesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesUpdateInput", {
        isAbstract: true
    })
], FeaturesUpdateInput);
exports.FeaturesUpdateInput = FeaturesUpdateInput;
