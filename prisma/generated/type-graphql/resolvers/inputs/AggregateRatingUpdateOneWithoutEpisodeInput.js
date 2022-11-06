"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingUpdateOneWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateOrConnectWithoutEpisodeInput_1 = require("../inputs/AggregateRatingCreateOrConnectWithoutEpisodeInput");
const AggregateRatingCreateWithoutEpisodeInput_1 = require("../inputs/AggregateRatingCreateWithoutEpisodeInput");
const AggregateRatingUpdateWithoutEpisodeInput_1 = require("../inputs/AggregateRatingUpdateWithoutEpisodeInput");
const AggregateRatingUpsertWithoutEpisodeInput_1 = require("../inputs/AggregateRatingUpsertWithoutEpisodeInput");
const AggregateRatingWhereUniqueInput_1 = require("../inputs/AggregateRatingWhereUniqueInput");
let AggregateRatingUpdateOneWithoutEpisodeInput = class AggregateRatingUpdateOneWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutEpisodeInput_1.AggregateRatingCreateWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutEpisodeInput_1.AggregateRatingCreateWithoutEpisodeInput)
], AggregateRatingUpdateOneWithoutEpisodeInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateOrConnectWithoutEpisodeInput_1.AggregateRatingCreateOrConnectWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateOrConnectWithoutEpisodeInput_1.AggregateRatingCreateOrConnectWithoutEpisodeInput)
], AggregateRatingUpdateOneWithoutEpisodeInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpsertWithoutEpisodeInput_1.AggregateRatingUpsertWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpsertWithoutEpisodeInput_1.AggregateRatingUpsertWithoutEpisodeInput)
], AggregateRatingUpdateOneWithoutEpisodeInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AggregateRatingUpdateOneWithoutEpisodeInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AggregateRatingUpdateOneWithoutEpisodeInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateRatingUpdateOneWithoutEpisodeInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateWithoutEpisodeInput_1.AggregateRatingUpdateWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateWithoutEpisodeInput_1.AggregateRatingUpdateWithoutEpisodeInput)
], AggregateRatingUpdateOneWithoutEpisodeInput.prototype, "update", void 0);
AggregateRatingUpdateOneWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingUpdateOneWithoutEpisodeInput", {
        isAbstract: true
    })
], AggregateRatingUpdateOneWithoutEpisodeInput);
exports.AggregateRatingUpdateOneWithoutEpisodeInput = AggregateRatingUpdateOneWithoutEpisodeInput;
