"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingUpdateOneWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateOrConnectWithoutTopicInput_1 = require("../inputs/AggregateRatingCreateOrConnectWithoutTopicInput");
const AggregateRatingCreateWithoutTopicInput_1 = require("../inputs/AggregateRatingCreateWithoutTopicInput");
const AggregateRatingUpdateWithoutTopicInput_1 = require("../inputs/AggregateRatingUpdateWithoutTopicInput");
const AggregateRatingUpsertWithoutTopicInput_1 = require("../inputs/AggregateRatingUpsertWithoutTopicInput");
const AggregateRatingWhereUniqueInput_1 = require("../inputs/AggregateRatingWhereUniqueInput");
let AggregateRatingUpdateOneWithoutTopicInput = class AggregateRatingUpdateOneWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutTopicInput_1.AggregateRatingCreateWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutTopicInput_1.AggregateRatingCreateWithoutTopicInput)
], AggregateRatingUpdateOneWithoutTopicInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateOrConnectWithoutTopicInput_1.AggregateRatingCreateOrConnectWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateOrConnectWithoutTopicInput_1.AggregateRatingCreateOrConnectWithoutTopicInput)
], AggregateRatingUpdateOneWithoutTopicInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpsertWithoutTopicInput_1.AggregateRatingUpsertWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpsertWithoutTopicInput_1.AggregateRatingUpsertWithoutTopicInput)
], AggregateRatingUpdateOneWithoutTopicInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AggregateRatingUpdateOneWithoutTopicInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AggregateRatingUpdateOneWithoutTopicInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateRatingUpdateOneWithoutTopicInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateWithoutTopicInput_1.AggregateRatingUpdateWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateWithoutTopicInput_1.AggregateRatingUpdateWithoutTopicInput)
], AggregateRatingUpdateOneWithoutTopicInput.prototype, "update", void 0);
AggregateRatingUpdateOneWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingUpdateOneWithoutTopicInput", {
        isAbstract: true
    })
], AggregateRatingUpdateOneWithoutTopicInput);
exports.AggregateRatingUpdateOneWithoutTopicInput = AggregateRatingUpdateOneWithoutTopicInput;
