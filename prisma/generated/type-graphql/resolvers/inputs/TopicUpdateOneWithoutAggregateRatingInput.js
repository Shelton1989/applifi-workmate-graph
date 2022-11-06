"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdateOneWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateOrConnectWithoutAggregateRatingInput_1 = require("../inputs/TopicCreateOrConnectWithoutAggregateRatingInput");
const TopicCreateWithoutAggregateRatingInput_1 = require("../inputs/TopicCreateWithoutAggregateRatingInput");
const TopicUpdateWithoutAggregateRatingInput_1 = require("../inputs/TopicUpdateWithoutAggregateRatingInput");
const TopicUpsertWithoutAggregateRatingInput_1 = require("../inputs/TopicUpsertWithoutAggregateRatingInput");
const TopicWhereUniqueInput_1 = require("../inputs/TopicWhereUniqueInput");
let TopicUpdateOneWithoutAggregateRatingInput = class TopicUpdateOneWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutAggregateRatingInput_1.TopicCreateWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutAggregateRatingInput_1.TopicCreateWithoutAggregateRatingInput)
], TopicUpdateOneWithoutAggregateRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutAggregateRatingInput_1.TopicCreateOrConnectWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateOrConnectWithoutAggregateRatingInput_1.TopicCreateOrConnectWithoutAggregateRatingInput)
], TopicUpdateOneWithoutAggregateRatingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpsertWithoutAggregateRatingInput_1.TopicUpsertWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpsertWithoutAggregateRatingInput_1.TopicUpsertWithoutAggregateRatingInput)
], TopicUpdateOneWithoutAggregateRatingInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TopicUpdateOneWithoutAggregateRatingInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TopicUpdateOneWithoutAggregateRatingInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], TopicUpdateOneWithoutAggregateRatingInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateWithoutAggregateRatingInput_1.TopicUpdateWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateWithoutAggregateRatingInput_1.TopicUpdateWithoutAggregateRatingInput)
], TopicUpdateOneWithoutAggregateRatingInput.prototype, "update", void 0);
TopicUpdateOneWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdateOneWithoutAggregateRatingInput", {
        isAbstract: true
    })
], TopicUpdateOneWithoutAggregateRatingInput);
exports.TopicUpdateOneWithoutAggregateRatingInput = TopicUpdateOneWithoutAggregateRatingInput;
