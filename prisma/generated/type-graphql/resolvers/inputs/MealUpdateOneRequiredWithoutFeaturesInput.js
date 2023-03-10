"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateOneRequiredWithoutFeaturesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutFeaturesInput_1 = require("../inputs/MealCreateOrConnectWithoutFeaturesInput");
const MealCreateWithoutFeaturesInput_1 = require("../inputs/MealCreateWithoutFeaturesInput");
const MealUpdateWithoutFeaturesInput_1 = require("../inputs/MealUpdateWithoutFeaturesInput");
const MealUpsertWithoutFeaturesInput_1 = require("../inputs/MealUpsertWithoutFeaturesInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealUpdateOneRequiredWithoutFeaturesInput = class MealUpdateOneRequiredWithoutFeaturesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutFeaturesInput_1.MealCreateWithoutFeaturesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutFeaturesInput_1.MealCreateWithoutFeaturesInput)
], MealUpdateOneRequiredWithoutFeaturesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateOrConnectWithoutFeaturesInput_1.MealCreateOrConnectWithoutFeaturesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateOrConnectWithoutFeaturesInput_1.MealCreateOrConnectWithoutFeaturesInput)
], MealUpdateOneRequiredWithoutFeaturesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpsertWithoutFeaturesInput_1.MealUpsertWithoutFeaturesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpsertWithoutFeaturesInput_1.MealUpsertWithoutFeaturesInput)
], MealUpdateOneRequiredWithoutFeaturesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealUpdateOneRequiredWithoutFeaturesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutFeaturesInput_1.MealUpdateWithoutFeaturesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutFeaturesInput_1.MealUpdateWithoutFeaturesInput)
], MealUpdateOneRequiredWithoutFeaturesInput.prototype, "update", void 0);
MealUpdateOneRequiredWithoutFeaturesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateOneRequiredWithoutFeaturesInput", {
        isAbstract: true
    })
], MealUpdateOneRequiredWithoutFeaturesInput);
exports.MealUpdateOneRequiredWithoutFeaturesInput = MealUpdateOneRequiredWithoutFeaturesInput;
