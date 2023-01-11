"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExperienceAvgAggregate = class ExperienceAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvgAggregate.prototype, "duration", void 0);
ExperienceAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ExperienceAvgAggregate", {
        isAbstract: true
    })
], ExperienceAvgAggregate);
exports.ExperienceAvgAggregate = ExperienceAvgAggregate;
