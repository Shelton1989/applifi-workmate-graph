"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateOneWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateOrConnectWithoutPostsInput_1 = require("../inputs/MealCreateOrConnectWithoutPostsInput");
const MealCreateWithoutPostsInput_1 = require("../inputs/MealCreateWithoutPostsInput");
const MealUpdateWithoutPostsInput_1 = require("../inputs/MealUpdateWithoutPostsInput");
const MealUpsertWithoutPostsInput_1 = require("../inputs/MealUpsertWithoutPostsInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealUpdateOneWithoutPostsInput = class MealUpdateOneWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutPostsInput_1.MealCreateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutPostsInput_1.MealCreateWithoutPostsInput)
], MealUpdateOneWithoutPostsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateOrConnectWithoutPostsInput_1.MealCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateOrConnectWithoutPostsInput_1.MealCreateOrConnectWithoutPostsInput)
], MealUpdateOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpsertWithoutPostsInput_1.MealUpsertWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpsertWithoutPostsInput_1.MealUpsertWithoutPostsInput)
], MealUpdateOneWithoutPostsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MealUpdateOneWithoutPostsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MealUpdateOneWithoutPostsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealUpdateOneWithoutPostsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutPostsInput_1.MealUpdateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutPostsInput_1.MealUpdateWithoutPostsInput)
], MealUpdateOneWithoutPostsInput.prototype, "update", void 0);
MealUpdateOneWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateOneWithoutPostsInput", {
        isAbstract: true
    })
], MealUpdateOneWithoutPostsInput);
exports.MealUpdateOneWithoutPostsInput = MealUpdateOneWithoutPostsInput;
