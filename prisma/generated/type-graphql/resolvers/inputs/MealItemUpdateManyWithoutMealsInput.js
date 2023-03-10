"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemUpdateManyWithoutMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateOrConnectWithoutMealsInput_1 = require("../inputs/MealItemCreateOrConnectWithoutMealsInput");
const MealItemCreateWithoutMealsInput_1 = require("../inputs/MealItemCreateWithoutMealsInput");
const MealItemScalarWhereInput_1 = require("../inputs/MealItemScalarWhereInput");
const MealItemUpdateManyWithWhereWithoutMealsInput_1 = require("../inputs/MealItemUpdateManyWithWhereWithoutMealsInput");
const MealItemUpdateWithWhereUniqueWithoutMealsInput_1 = require("../inputs/MealItemUpdateWithWhereUniqueWithoutMealsInput");
const MealItemUpsertWithWhereUniqueWithoutMealsInput_1 = require("../inputs/MealItemUpsertWithWhereUniqueWithoutMealsInput");
const MealItemWhereUniqueInput_1 = require("../inputs/MealItemWhereUniqueInput");
let MealItemUpdateManyWithoutMealsInput = class MealItemUpdateManyWithoutMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemCreateWithoutMealsInput_1.MealItemCreateWithoutMealsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemUpdateManyWithoutMealsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemCreateOrConnectWithoutMealsInput_1.MealItemCreateOrConnectWithoutMealsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemUpdateManyWithoutMealsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemUpsertWithWhereUniqueWithoutMealsInput_1.MealItemUpsertWithWhereUniqueWithoutMealsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemUpdateManyWithoutMealsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemWhereUniqueInput_1.MealItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemUpdateManyWithoutMealsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemWhereUniqueInput_1.MealItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemUpdateManyWithoutMealsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemWhereUniqueInput_1.MealItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemUpdateManyWithoutMealsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemWhereUniqueInput_1.MealItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemUpdateManyWithoutMealsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemUpdateWithWhereUniqueWithoutMealsInput_1.MealItemUpdateWithWhereUniqueWithoutMealsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemUpdateManyWithoutMealsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemUpdateManyWithWhereWithoutMealsInput_1.MealItemUpdateManyWithWhereWithoutMealsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemUpdateManyWithoutMealsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemScalarWhereInput_1.MealItemScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemUpdateManyWithoutMealsInput.prototype, "deleteMany", void 0);
MealItemUpdateManyWithoutMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemUpdateManyWithoutMealsInput", {
        isAbstract: true
    })
], MealItemUpdateManyWithoutMealsInput);
exports.MealItemUpdateManyWithoutMealsInput = MealItemUpdateManyWithoutMealsInput;
