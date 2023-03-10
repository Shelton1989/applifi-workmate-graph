"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateOneRequiredWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutOrdersInput_1 = require("../inputs/MealCreateOrConnectWithoutOrdersInput");
const MealCreateWithoutOrdersInput_1 = require("../inputs/MealCreateWithoutOrdersInput");
const MealUpdateWithoutOrdersInput_1 = require("../inputs/MealUpdateWithoutOrdersInput");
const MealUpsertWithoutOrdersInput_1 = require("../inputs/MealUpsertWithoutOrdersInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealUpdateOneRequiredWithoutOrdersInput = class MealUpdateOneRequiredWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutOrdersInput_1.MealCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutOrdersInput_1.MealCreateWithoutOrdersInput)
], MealUpdateOneRequiredWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateOrConnectWithoutOrdersInput_1.MealCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateOrConnectWithoutOrdersInput_1.MealCreateOrConnectWithoutOrdersInput)
], MealUpdateOneRequiredWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpsertWithoutOrdersInput_1.MealUpsertWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpsertWithoutOrdersInput_1.MealUpsertWithoutOrdersInput)
], MealUpdateOneRequiredWithoutOrdersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealUpdateOneRequiredWithoutOrdersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutOrdersInput_1.MealUpdateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutOrdersInput_1.MealUpdateWithoutOrdersInput)
], MealUpdateOneRequiredWithoutOrdersInput.prototype, "update", void 0);
MealUpdateOneRequiredWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateOneRequiredWithoutOrdersInput", {
        isAbstract: true
    })
], MealUpdateOneRequiredWithoutOrdersInput);
exports.MealUpdateOneRequiredWithoutOrdersInput = MealUpdateOneRequiredWithoutOrdersInput;
