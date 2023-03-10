"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutReactionsInput_1 = require("../inputs/MealCreateOrConnectWithoutReactionsInput");
const MealCreateWithoutReactionsInput_1 = require("../inputs/MealCreateWithoutReactionsInput");
const MealUpdateWithoutReactionsInput_1 = require("../inputs/MealUpdateWithoutReactionsInput");
const MealUpsertWithoutReactionsInput_1 = require("../inputs/MealUpsertWithoutReactionsInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealUpdateOneWithoutReactionsInput = class MealUpdateOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutReactionsInput_1.MealCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutReactionsInput_1.MealCreateWithoutReactionsInput)
], MealUpdateOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateOrConnectWithoutReactionsInput_1.MealCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateOrConnectWithoutReactionsInput_1.MealCreateOrConnectWithoutReactionsInput)
], MealUpdateOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpsertWithoutReactionsInput_1.MealUpsertWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpsertWithoutReactionsInput_1.MealUpsertWithoutReactionsInput)
], MealUpdateOneWithoutReactionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MealUpdateOneWithoutReactionsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MealUpdateOneWithoutReactionsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealUpdateOneWithoutReactionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutReactionsInput_1.MealUpdateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutReactionsInput_1.MealUpdateWithoutReactionsInput)
], MealUpdateOneWithoutReactionsInput.prototype, "update", void 0);
MealUpdateOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateOneWithoutReactionsInput", {
        isAbstract: true
    })
], MealUpdateOneWithoutReactionsInput);
exports.MealUpdateOneWithoutReactionsInput = MealUpdateOneWithoutReactionsInput;
