"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeUpdateOneWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateOrConnectWithoutAggregateRatingInput_1 = require("../inputs/EpisodeCreateOrConnectWithoutAggregateRatingInput");
const EpisodeCreateWithoutAggregateRatingInput_1 = require("../inputs/EpisodeCreateWithoutAggregateRatingInput");
const EpisodeUpdateWithoutAggregateRatingInput_1 = require("../inputs/EpisodeUpdateWithoutAggregateRatingInput");
const EpisodeUpsertWithoutAggregateRatingInput_1 = require("../inputs/EpisodeUpsertWithoutAggregateRatingInput");
const EpisodeWhereUniqueInput_1 = require("../inputs/EpisodeWhereUniqueInput");
let EpisodeUpdateOneWithoutAggregateRatingInput = class EpisodeUpdateOneWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateWithoutAggregateRatingInput_1.EpisodeCreateWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateWithoutAggregateRatingInput_1.EpisodeCreateWithoutAggregateRatingInput)
], EpisodeUpdateOneWithoutAggregateRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateOrConnectWithoutAggregateRatingInput_1.EpisodeCreateOrConnectWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateOrConnectWithoutAggregateRatingInput_1.EpisodeCreateOrConnectWithoutAggregateRatingInput)
], EpisodeUpdateOneWithoutAggregateRatingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpsertWithoutAggregateRatingInput_1.EpisodeUpsertWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpsertWithoutAggregateRatingInput_1.EpisodeUpsertWithoutAggregateRatingInput)
], EpisodeUpdateOneWithoutAggregateRatingInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EpisodeUpdateOneWithoutAggregateRatingInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EpisodeUpdateOneWithoutAggregateRatingInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], EpisodeUpdateOneWithoutAggregateRatingInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateWithoutAggregateRatingInput_1.EpisodeUpdateWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateWithoutAggregateRatingInput_1.EpisodeUpdateWithoutAggregateRatingInput)
], EpisodeUpdateOneWithoutAggregateRatingInput.prototype, "update", void 0);
EpisodeUpdateOneWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeUpdateOneWithoutAggregateRatingInput", {
        isAbstract: true
    })
], EpisodeUpdateOneWithoutAggregateRatingInput);
exports.EpisodeUpdateOneWithoutAggregateRatingInput = EpisodeUpdateOneWithoutAggregateRatingInput;
