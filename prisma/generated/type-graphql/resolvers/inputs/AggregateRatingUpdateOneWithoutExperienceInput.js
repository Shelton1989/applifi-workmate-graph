"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingUpdateOneWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateOrConnectWithoutExperienceInput_1 = require("../inputs/AggregateRatingCreateOrConnectWithoutExperienceInput");
const AggregateRatingCreateWithoutExperienceInput_1 = require("../inputs/AggregateRatingCreateWithoutExperienceInput");
const AggregateRatingUpdateWithoutExperienceInput_1 = require("../inputs/AggregateRatingUpdateWithoutExperienceInput");
const AggregateRatingUpsertWithoutExperienceInput_1 = require("../inputs/AggregateRatingUpsertWithoutExperienceInput");
const AggregateRatingWhereUniqueInput_1 = require("../inputs/AggregateRatingWhereUniqueInput");
let AggregateRatingUpdateOneWithoutExperienceInput = class AggregateRatingUpdateOneWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutExperienceInput_1.AggregateRatingCreateWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutExperienceInput_1.AggregateRatingCreateWithoutExperienceInput)
], AggregateRatingUpdateOneWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateOrConnectWithoutExperienceInput_1.AggregateRatingCreateOrConnectWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateOrConnectWithoutExperienceInput_1.AggregateRatingCreateOrConnectWithoutExperienceInput)
], AggregateRatingUpdateOneWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpsertWithoutExperienceInput_1.AggregateRatingUpsertWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpsertWithoutExperienceInput_1.AggregateRatingUpsertWithoutExperienceInput)
], AggregateRatingUpdateOneWithoutExperienceInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AggregateRatingUpdateOneWithoutExperienceInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AggregateRatingUpdateOneWithoutExperienceInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateRatingUpdateOneWithoutExperienceInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateWithoutExperienceInput_1.AggregateRatingUpdateWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateWithoutExperienceInput_1.AggregateRatingUpdateWithoutExperienceInput)
], AggregateRatingUpdateOneWithoutExperienceInput.prototype, "update", void 0);
AggregateRatingUpdateOneWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingUpdateOneWithoutExperienceInput", {
        isAbstract: true
    })
], AggregateRatingUpdateOneWithoutExperienceInput);
exports.AggregateRatingUpdateOneWithoutExperienceInput = AggregateRatingUpdateOneWithoutExperienceInput;
