"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemUpdateOneRequiredWithoutOptionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateOrConnectWithoutOptionsInput_1 = require("../inputs/MealItemCreateOrConnectWithoutOptionsInput");
const MealItemCreateWithoutOptionsInput_1 = require("../inputs/MealItemCreateWithoutOptionsInput");
const MealItemUpdateWithoutOptionsInput_1 = require("../inputs/MealItemUpdateWithoutOptionsInput");
const MealItemUpsertWithoutOptionsInput_1 = require("../inputs/MealItemUpsertWithoutOptionsInput");
const MealItemWhereUniqueInput_1 = require("../inputs/MealItemWhereUniqueInput");
let MealItemUpdateOneRequiredWithoutOptionsInput = class MealItemUpdateOneRequiredWithoutOptionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateWithoutOptionsInput_1.MealItemCreateWithoutOptionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreateWithoutOptionsInput_1.MealItemCreateWithoutOptionsInput)
], MealItemUpdateOneRequiredWithoutOptionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateOrConnectWithoutOptionsInput_1.MealItemCreateOrConnectWithoutOptionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreateOrConnectWithoutOptionsInput_1.MealItemCreateOrConnectWithoutOptionsInput)
], MealItemUpdateOneRequiredWithoutOptionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpsertWithoutOptionsInput_1.MealItemUpsertWithoutOptionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpsertWithoutOptionsInput_1.MealItemUpsertWithoutOptionsInput)
], MealItemUpdateOneRequiredWithoutOptionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereUniqueInput_1.MealItemWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemWhereUniqueInput_1.MealItemWhereUniqueInput)
], MealItemUpdateOneRequiredWithoutOptionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateWithoutOptionsInput_1.MealItemUpdateWithoutOptionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpdateWithoutOptionsInput_1.MealItemUpdateWithoutOptionsInput)
], MealItemUpdateOneRequiredWithoutOptionsInput.prototype, "update", void 0);
MealItemUpdateOneRequiredWithoutOptionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemUpdateOneRequiredWithoutOptionsInput", {
        isAbstract: true
    })
], MealItemUpdateOneRequiredWithoutOptionsInput);
exports.MealItemUpdateOneRequiredWithoutOptionsInput = MealItemUpdateOneRequiredWithoutOptionsInput;
