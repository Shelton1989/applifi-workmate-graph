"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExperienceSumAggregate = class ExperienceSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceSumAggregate.prototype, "duration", void 0);
ExperienceSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ExperienceSumAggregate", {
        isAbstract: true
    })
], ExperienceSumAggregate);
exports.ExperienceSumAggregate = ExperienceSumAggregate;
