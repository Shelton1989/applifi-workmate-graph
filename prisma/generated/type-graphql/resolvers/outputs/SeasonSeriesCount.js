"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SeasonSeriesCount = class SeasonSeriesCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SeasonSeriesCount.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SeasonSeriesCount.prototype, "Episodes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SeasonSeriesCount.prototype, "Posts", void 0);
SeasonSeriesCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SeasonSeriesCount", {
        isAbstract: true
    })
], SeasonSeriesCount);
exports.SeasonSeriesCount = SeasonSeriesCount;
