"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAggregateRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateInput_1 = require("../../../inputs/AggregateRatingCreateInput");
let CreateAggregateRatingArgs = class CreateAggregateRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateInput_1.AggregateRatingCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateInput_1.AggregateRatingCreateInput)
], CreateAggregateRatingArgs.prototype, "data", void 0);
CreateAggregateRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateAggregateRatingArgs);
exports.CreateAggregateRatingArgs = CreateAggregateRatingArgs;
